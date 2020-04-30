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
require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
