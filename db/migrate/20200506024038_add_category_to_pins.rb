class AddCategoryToPins < ActiveRecord::Migration[5.2]
  def change
  end
  add_column :pins, :category, :string
end
