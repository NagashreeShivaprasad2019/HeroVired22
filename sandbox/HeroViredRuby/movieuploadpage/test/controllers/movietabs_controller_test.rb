require "test_helper"

class MovietabsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @movietab = movietabs(:one)
  end

  test "should get index" do
    get movietabs_url
    assert_response :success
  end

  test "should get new" do
    get new_movietab_url
    assert_response :success
  end

  test "should create movietab" do
    assert_difference("Movietab.count") do
      post movietabs_url, params: { movietab: { description: @movietab.description, director: @movietab.director, language: @movietab.language, name: @movietab.name } }
    end

    assert_redirected_to movietab_url(Movietab.last)
  end

  test "should show movietab" do
    get movietab_url(@movietab)
    assert_response :success
  end

  test "should get edit" do
    get edit_movietab_url(@movietab)
    assert_response :success
  end

  test "should update movietab" do
    patch movietab_url(@movietab), params: { movietab: { description: @movietab.description, director: @movietab.director, language: @movietab.language, name: @movietab.name } }
    assert_redirected_to movietab_url(@movietab)
  end

  test "should destroy movietab" do
    assert_difference("Movietab.count", -1) do
      delete movietab_url(@movietab)
    end

    assert_redirected_to movietabs_url
  end
end
