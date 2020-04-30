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

    has_one_attached :photo
end
