class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
    end

    def require_user
        
    end

    def logged_in?
        
    end
        
    def login(user)

    end

    def logout

    end

end
