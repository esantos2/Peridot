json.extract! board, :id, :user_id, :name, :description, :date_start, :date_end
json.pins do
    json.array! board.pins
end