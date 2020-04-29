class Pin < ApplicationRecord
    validates :user_id, :title, presence: true

    has_one_attached :photo
end
