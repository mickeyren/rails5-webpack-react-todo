class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :note, :completed_at
end
