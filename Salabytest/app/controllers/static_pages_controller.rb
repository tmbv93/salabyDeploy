class StaticPagesController < ApplicationController
  def home
  end

  def index
    @exclude_header = true
    @exclude_footer = true
  end

  def help
  end

  def forside
    @include_header_info = true
  end

  def admin
    @exclude_footer = true
  end

end
