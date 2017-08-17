class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :notes, :completed_at
  attributes :created_ts

  def created_ts
    object.created_at.to_i
  end
end
