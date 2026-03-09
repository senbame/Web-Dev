def has23(nums):
  
    if len(nums) == 2:
        if nums[0] == 2 or nums[0] == 3 or nums[1] == 2 or nums[1] == 3:
            return True
    return False