class Api::BoardsController < ApplicationController
    
    def index
        @boards = Board.all
        render "/api/boards/index"
    end

    def show
        @board = Board.find_by(id: params[:id])
        if @board
            render "/api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def create
        @board = Board.new(board_params)
        @board.user_id = current_user.id
        if @board.save
            render "/api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        if @board && @board.user_id == current_user.id
            if @board.update(board_params)
                render "/api/boards/show"
            else
                render json: @board.errors.full_messages, status: 422
            end
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
        if @board && @board.user_id == current_user.id
            @board.destroy
            render "/api/boards/index"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    private

    def board_params
        params.require(:board).permit(:name, :description, :date_start, :date_end)
    end
end
