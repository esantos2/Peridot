class Api::BoardsController < ApplicationController
    
    def index

    end

    def show

    end

    def create

    end

    def update

    end

    def destroy

    end

    private

    def board_params
        params.require(:board).permit(:name, :description, :date_start, :date_end)
    end
end
