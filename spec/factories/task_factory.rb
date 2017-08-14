FactoryGirl.define do
  factory :task, class: Task do
    sequence(:title) { |n| "Task ##{n} - #{Kernel.rand(9999)}" }
    notes 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    completed_at nil
  end
end
