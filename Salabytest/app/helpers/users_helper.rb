module UsersHelper

  def is_me? (user)
      user == current_user
  end

  def get_departments(user)
    Department.joins(:users).where(users: {id: user.id})
  end

end