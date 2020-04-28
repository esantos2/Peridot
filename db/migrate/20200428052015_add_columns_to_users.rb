class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :age, :integer, null: false
    add_column :users, :gender, :string, null: false
    add_column :users, :language, :string, null: false
    remove_column :users, :location
    add_column :users, :region, :string, null: false
  end
end
