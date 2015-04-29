class SessionsController < ApplicationController
  def new
  end

  def create

    if  logged_in?
      redirect_to static_pages_barn_forside_path
      flash[:alert] = "Du er allerede logget inn som #{current_user.username}"

    # If user doesn't input anything, redirect without loging in
    elsif params[:session][:username] == ""
      redirect_to static_pages_barn_forside_path
    else

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
  end

  def destroy
    log_out
    redirect_to root_path
      end
end

