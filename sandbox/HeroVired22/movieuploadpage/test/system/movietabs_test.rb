require "application_system_test_case"

class MovietabsTest < ApplicationSystemTestCase
  setup do
    @movietab = movietabs(:one)
  end

  test "visiting the index" do
    visit movietabs_url
    assert_selector "h1", text: "Movietabs"
  end

  test "should create movietab" do
    visit movietabs_url
    click_on "New movietab"

    fill_in "Description", with: @movietab.description
    fill_in "Director", with: @movietab.director
    fill_in "Language", with: @movietab.language
    fill_in "Name", with: @movietab.name
    click_on "Create Movietab"

    assert_text "Movietab was successfully created"
    click_on "Back"
  end

  test "should update Movietab" do
    visit movietab_url(@movietab)
    click_on "Edit this movietab", match: :first

    fill_in "Description", with: @movietab.description
    fill_in "Director", with: @movietab.director
    fill_in "Language", with: @movietab.language
    fill_in "Name", with: @movietab.name
    click_on "Update Movietab"

    assert_text "Movietab was successfully updated"
    click_on "Back"
  end

  test "should destroy Movietab" do
    visit movietab_url(@movietab)
    click_on "Destroy this movietab", match: :first

    assert_text "Movietab was successfully destroyed"
  end
end
