require "test_helper"

class MonstersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @monster = monsters(:one)
  end

  test "should get index" do
    get monsters_url, as: :json
    assert_response :success
  end

  test "should create monster" do
    assert_difference('Monster.count') do
      post monsters_url, params: { monster: { description: @monster.description, name: @monster.name, race: @monster.race, rating: @monster.rating } }, as: :json
    end

    assert_response 201
  end

  test "should show monster" do
    get monster_url(@monster), as: :json
    assert_response :success
  end

  test "should update monster" do
    patch monster_url(@monster), params: { monster: { description: @monster.description, name: @monster.name, race: @monster.race, rating: @monster.rating } }, as: :json
    assert_response 200
  end

  test "should destroy monster" do
    assert_difference('Monster.count', -1) do
      delete monster_url(@monster), as: :json
    end

    assert_response 204
  end
end
