require 'test_helper'

class LoginControllerTest < ActionDispatch::IntegrationTest
  test "should get signup" do
    get login_signup_url
    assert_response :success
  end

  test "should get forgotpass" do
    get login_forgotpass_url
    assert_response :success
  end

end
