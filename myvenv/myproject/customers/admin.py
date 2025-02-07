from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Customer  # Import your model

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone_number', 'created_at')  # Customize admin view
    search_fields = ('email', 'first_name', 'last_name')  # Enable search in admin

# OR
# admin.site.register(Customer)  # Simple registration
