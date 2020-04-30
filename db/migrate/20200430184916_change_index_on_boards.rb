class ChangeIndexOnBoards < ActiveRecord::Migration[5.2]
  def change
    remove_index :boards, name: "index_boards_on_user_id_and_name"
    add_index :boards, [:name, :user_id], unique: true
  end
end
