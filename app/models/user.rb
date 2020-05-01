# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string
#  first_name      :string
#  last_name       :string
#  email           :string           not null
#  bio             :text
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  gender          :string
#  language        :string
#  region          :string
#  age             :string
#
class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true
    validates :password_digest, :session_token, :email, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :age, presence: true

    has_many :boards

    has_many :created_pins,
        foreign_key: :user_id,
        class_name: :Pin

    has_many :saved_pins,
        through: :boards,
        source: :pins

    attr_reader :password

    after_initialize :ensure_session_token

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end
