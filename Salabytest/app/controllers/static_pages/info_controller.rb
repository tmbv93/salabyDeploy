class StaticPages::InfoController < ApplicationController
  def bestilling
    @include_header_info = true
  end

  def informasjon
    @include_header_info = true
  end

  def kompetanse
    @include_header_info = true
  end

  def forside
    @include_header_info = true
  end
end
