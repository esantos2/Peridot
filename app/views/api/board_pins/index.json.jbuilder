@board_pins.each do |bp|
    json.set! bp.id do
        json.extract! bp, :board_id, :pin_id
    end
end