require 'rails_helper'

describe TaskSerializer do
  let(:task) { build(:task) }

  before do
    disable_cache
  end

  it "serializes a task" do
    json = serialize(task)

    expect(json).to include(
      id: be,
      title: be,
      notes: be,
      completed_at: be
    )
  end

  def serialize(order_promotion)
    TaskSerializer.new(order_promotion, root: false).as_json
  end

  def disable_cache
    Rails.cache.clear
  end
end
