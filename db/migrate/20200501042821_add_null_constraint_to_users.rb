class AddNullConstraintToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :age, :string, null: false
  end
end
