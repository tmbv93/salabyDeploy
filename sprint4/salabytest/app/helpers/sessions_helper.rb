module SessionsHelper

  # behandler logg_inn

  def log_in(user)
    session[:user_id] = user.id
  end
end
