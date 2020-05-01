class RemoveNullFromUserDetails < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :username, :string
    change_column :users, :first_name, :string
    change_column :users, :last_name, :string
    change_column :users, :gender, :string
    change_column :users, :language, :string
    change_column :users, :region, :string
    change_column :users, :age, :string
  end
end
