module SessionsHelper

  # Behandler logg_inn
  def log_in(user)
    session[:user_id] = user.id
  end

  # Returnerer nåværende brukersession
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  # Returnerer true hvis logged inn
  def logged_in?
    !current_user.nil?
  end

end
