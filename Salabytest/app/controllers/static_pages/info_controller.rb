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

  def omByparken
    @include_header_info = true
  end

  def omKanalS
    @include_header_info = true
  end

  def omSalaby
    @include_header_info = true
  end

  def omSkoleveien
    @include_header_info = true
  end

  def forside
    @include_header_info = true
  end
end
