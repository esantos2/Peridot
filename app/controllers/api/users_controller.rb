class Api::UsersController < ApplicationController
    
    def show

    end

    def create
        @user = User.create(user_params)
        if @user.save
            login(@user)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update

    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :age, :username, :first_name, :last_name, :gender, :language, :region)
    end
end
