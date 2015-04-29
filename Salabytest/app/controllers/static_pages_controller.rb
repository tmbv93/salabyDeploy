class StaticPagesController < ApplicationController
  def home
  end

  def index
    @exclude_header = true
    @exclude_footer = true
  end

  def help
  end

  def info_pages_bestilling_path
  end

  def admin
  end

end
