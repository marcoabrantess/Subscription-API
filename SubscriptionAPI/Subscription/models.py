from django.db import models
from SubscriptionPlan.models import SubscriptionPlan
from Customer.models import Customer

class Subscription(models.Model):
    plan = models.ForeignKey(SubscriptionPlan, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    stripe_subscription_id = models.CharField(max_length=255, blank=True, null=True)

    STATUS_CHOICES = [
        ('active', 'Active'),
        ('canceled', 'Canceled'),
        ('trialing', 'Trialing'),
    ]
    status = models.CharField(max_length=20,choices=STATUS_CHOICES)
    