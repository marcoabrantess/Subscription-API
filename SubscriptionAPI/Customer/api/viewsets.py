from rest_framework.viewsets import ModelViewSet
from Customer.api.serializers import CustomerSerializer
from Customer.models import Customer

class CustomerViewSet(ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()