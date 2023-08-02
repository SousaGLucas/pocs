.PHONY: install
install:
	@echo "== Installing Istio =="
	@istioctl install --set profile=demo -y
	@echo "== =="

	@echo "== Installing Istio Samples Addons =="
	@kubectl apply -f /usr/local/istio/samples/addons
	@echo "== =="

.PHONY: resources
resources:
	@echo "== Creating Istio ingress resources =="
	@kubectl apply -f ingress_resources.yaml
	@echo "== =="
