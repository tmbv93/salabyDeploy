class ApplicationController < ActionController::Base

  include SessionsHelper

  # Prevent CSRF attacks by raising an exception.
  protect_from_forgery with: :exception

  def not_found
    render file: "#{Rails.root}/public/placeholder.erb", layout: false, status: 404
  end

end
