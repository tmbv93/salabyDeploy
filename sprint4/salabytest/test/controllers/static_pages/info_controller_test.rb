require 'test_helper'

class StaticPages::InfoControllerTest < ActionController::TestCase
  test "should get bestilling" do
    get :bestilling
    assert_response :success
  end

  test "should get informasjon" do
    get :informasjon
    assert_response :success
  end

  test "should get kompetanse" do
    get :kompetanse
    assert_response :success
  end

  test "should get omByparken" do
    get :omByparken
    assert_response :success
  end

  test "should get omKanalS" do
    get :omKanalS
    assert_response :success
  end

  test "should get omSalaby" do
    get :omSalaby
    assert_response :success
  end

  test "should get omSkoleveien" do
    get :omSkoleveien
    assert_response :success
  end

  test "should get forside" do
    get :forside
    assert_response :success
  end

end
