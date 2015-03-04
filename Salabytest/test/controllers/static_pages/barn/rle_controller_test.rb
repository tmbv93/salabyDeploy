require 'test_helper'

class StaticPages::Barn::RleControllerTest < ActionController::TestCase
  test "should get islam" do
    get :islam
    assert_response :success
  end

  test "should get jodedom" do
    get :jodedom
    assert_response :success
  end

  test "should get hinduisme" do
    get :hinduisme
    assert_response :success
  end

  test "should get buddhisme" do
    get :buddhisme
    assert_response :success
  end

  test "should get kristendom" do
    get :kristendom
    assert_response :success
  end

  test "should get sikhisme" do
    get :sikhisme
    assert_response :success
  end

  test "should get etikk_filosofi" do
    get :etikk_filosofi
    assert_response :success
  end

  test "should get kunst" do
    get :kunst
    assert_response :success
  end

  test "should get kirkehistorie" do
    get :kirkehistorie
    assert_response :success
  end

end
