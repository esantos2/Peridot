class ChangeAgeToString < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :age
    add_column :users, :age, :string, null: false
  end
end
