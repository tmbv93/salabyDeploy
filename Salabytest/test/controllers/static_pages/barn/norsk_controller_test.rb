require 'test_helper'

class StaticPages::Barn::NorskControllerTest < ActionController::TestCase
  test "should get eksempeltema1" do
    get :eksempeltema1
    assert_response :success
  end

  test "should get eksempeltema2" do
    get :eksempeltema2
    assert_response :success
  end

end
