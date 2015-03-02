require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @user = User.new(first_name: "Test", last_name: "Person", username: "username", password: "testpass", password_confirmation: "testpass")
  end

  test "is valid" do
    assert @user.valid?
  end


  test "first name is present" do
    @user.first_name = '     '
    assert_not @user.valid?
  end

  test "last name is present" do
    @user.last_name = '    '
    assert_not @user.valid?
  end

  test "first name is correct length" do
    @user.first_name = "a" * 36 #max -35 iht. UK Government Data Standards Catalogue
    assert_not @user.valid?
  end

  test "last name is correct length" do
    @user.last_name = "a" * 36 #max – 35 iht. UK Government Data Standards Catalogue
    assert_not @user.valid?
  end

  test "password is correct length" do
    @user.password = @user.password_confirmation = "a" * 5 #at least six chars
    assert_not @user.valid?
  end

  test "username is present" do
    @user.username = '   '
    assert_not @user.valid?
  end

  test "username is correct length" do
    @user.username = "a" * 5; #at least six chars
    assert_not @user.valid?
    @user.username = "a" * 26 #max 25 chars
    assert_not @user.valid?
  end

end
