class ChangeNullFromUserDetails < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :username, :string, null: true
    change_column :users, :first_name, :string, null: true
    change_column :users, :last_name, :string, null: true
    change_column :users, :gender, :string, null: true
    change_column :users, :language, :string, null: true
    change_column :users, :region, :string, null: true
    change_column :users, :age, :string, null: true
  end
end
