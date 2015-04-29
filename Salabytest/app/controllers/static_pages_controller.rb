class StaticPagesController < ApplicationController
  def home
  end

  def index

    if logged_in?
      redirect_to static_pages_barn_forside_path
    else

    @exclude_header = true
    @exclude_footer = true

      end
  end

  def help
  end

  def forside
  end

  def admin
    @exclude_footer = true
  end

end
