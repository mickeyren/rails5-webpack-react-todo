class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :notes, :completed_at
end
