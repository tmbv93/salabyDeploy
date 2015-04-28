class SessionsController < ApplicationController
  def new
  end

  def create

    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
        #Login
        log_in(user)
        redirect_to static_pages_barn_forside_path
    else
      flash[:alert] = '- Ugyldig brukernavn og/eller passord!'
      render 'static_pages/index'
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end
end
