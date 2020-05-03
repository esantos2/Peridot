# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  name        :string           not null
#  description :text
#  date_start  :datetime
#  date_end    :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Board < ApplicationRecord
    validates :user_id, :name, presence: true
    validates :name, :uniqueness => {:scope => :user_id}
    belongs_to :user
    has_many :board_pins, dependent: :destroy
    has_many :pins, through: :board_pins
end
