class AddIndexToPinTitle < ActiveRecord::Migration[5.2]
  def change
    add_index :pins, :title
  end
end
