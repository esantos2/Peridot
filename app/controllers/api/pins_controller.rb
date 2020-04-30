class Api::PinsController < ApplicationController

    def index
        @pins = Pin.all
        render "/api/pins/index"
    end

    def show
        @pin = Pin.find(params[:id])
        render "/api/pins/show"
    end

    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            render "/api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def update
        @pin = Pin.find(params[:id])
        if @pin && @pin.update(pin_params)
            render "/api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def destroy
        @pin = Pin.find(params[:id])
        @pin.destroy
        render "/api/pins/index"
    end

    private

    def pin_params
        params.require(:pin).permit(:user_id, :title, :description, :link)
    end
end
