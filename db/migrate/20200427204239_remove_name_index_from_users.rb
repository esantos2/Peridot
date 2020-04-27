class RemoveNameIndexFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, name: "index_users_on_first_name_and_last_name"
    add_index :users, :first_name 
    add_index :users, :last_name 
  end
end
