# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text
#  link        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Pin < ApplicationRecord
    validates :user_id, :title, presence: true
    validate :ensure_photo
    has_one_attached :photo
    belongs_to :user
    has_many :board_pins, dependent: :destroy
    has_many :boards, through: :board_pins

    def ensure_photo
        unless self.photo.attached?
            errors[:pin] << "must be attached"
        end
    end

end
