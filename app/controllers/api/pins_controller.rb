class Api::PinsController < ApplicationController

    def index
        @pins = Pin.all
        render "/api/pins/index"
    end

    def show
        @pin = Pin.find_by(id: params[:id])
        if @pin 
            render "/api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def create
        @pin = Pin.new(pin_params)
        @pin.user_id = current_user.id
        if @pin.save
            render "/api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def update
        @pin = Pin.find_by(id: params[:id])
        if @pin && @pin.user_id == current_user.id
            if @pin.update(pin_params)
                render "/api/pins/show"
            else
                render json: @pin.errors.full_messages, status: 422
            end
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])
        if @pin && @pin.user_id == current_user.id
            if @pin.destroy
                render json: @pin.id
            else 
                render json: @pin.errors.full_messages, status: 422
            end
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    private

    def pin_params
        params.require(:pin).permit(:title, :description, :link, :user_id, :photo)
    end
end
