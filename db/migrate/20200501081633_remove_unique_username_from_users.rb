class RemoveUniqueUsernameFromUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :username, :string, unique: false
  end
end
