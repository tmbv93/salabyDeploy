require 'test_helper'

class StaticPages::BarnControllerTest < ActionController::TestCase
  test "should get forside" do
    get :forside
    assert_response :success
  end

  test "should get hinduisme" do
    get :hinduisme
    assert_response :success
  end

  test "should get rle" do
    get :rle
    assert_response :success
  end

end
